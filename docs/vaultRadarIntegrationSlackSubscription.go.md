# `vaultRadarIntegrationSlackSubscription` Submodule <a name="`vaultRadarIntegrationSlackSubscription` Submodule" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarIntegrationSlackSubscription <a name="VaultRadarIntegrationSlackSubscription" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_radar_integration_slack_subscription hcp_vault_radar_integration_slack_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarintegrationslacksubscription"

vaultradarintegrationslacksubscription.NewVaultRadarIntegrationSlackSubscription(scope Construct, id *string, config VaultRadarIntegrationSlackSubscriptionConfig) VaultRadarIntegrationSlackSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig">VaultRadarIntegrationSlackSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig">VaultRadarIntegrationSlackSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarIntegrationSlackSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarintegrationslacksubscription"

vaultradarintegrationslacksubscription.VaultRadarIntegrationSlackSubscription_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarintegrationslacksubscription"

vaultradarintegrationslacksubscription.VaultRadarIntegrationSlackSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarintegrationslacksubscription"

vaultradarintegrationslacksubscription.VaultRadarIntegrationSlackSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarintegrationslacksubscription"

vaultradarintegrationslacksubscription.VaultRadarIntegrationSlackSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultRadarIntegrationSlackSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultRadarIntegrationSlackSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultRadarIntegrationSlackSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_radar_integration_slack_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarIntegrationSlackSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarIntegrationSlackSubscriptionConfig <a name="VaultRadarIntegrationSlackSubscriptionConfig" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v10/vaultradarintegrationslacksubscription"

&vaultradarintegrationslacksubscription.VaultRadarIntegrationSlackSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Channel: *string,
	ConnectionId: *string,
	Name: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.channel">Channel</a></code> | <code>*string</code> | Name of the Slack channel that messages should be sent to. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | id of the integration slack connection to use for the subscription. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.name">Name</a></code> | <code>*string</code> | Name of subscription. Name must be unique. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Name of the Slack channel that messages should be sent to.

Note that HashiCorp Vault Radar will send a test message to verify the channel. Example: dev-ops-team

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_radar_integration_slack_subscription#channel VaultRadarIntegrationSlackSubscription#channel}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

id of the integration slack connection to use for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_radar_integration_slack_subscription#connection_id VaultRadarIntegrationSlackSubscription#connection_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of subscription. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_radar_integration_slack_subscription#name VaultRadarIntegrationSlackSubscription#name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/resources/vault_radar_integration_slack_subscription#project_id VaultRadarIntegrationSlackSubscription#project_id}

---



