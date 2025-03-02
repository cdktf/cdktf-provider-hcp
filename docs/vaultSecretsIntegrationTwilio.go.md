# `vaultSecretsIntegrationTwilio` Submodule <a name="`vaultSecretsIntegrationTwilio` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationTwilio <a name="VaultSecretsIntegrationTwilio" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_twilio hcp_vault_secrets_integration_twilio}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationtwilio"

vaultsecretsintegrationtwilio.NewVaultSecretsIntegrationTwilio(scope Construct, id *string, config VaultSecretsIntegrationTwilioConfig) VaultSecretsIntegrationTwilio
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig">VaultSecretsIntegrationTwilioConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig">VaultSecretsIntegrationTwilioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.putStaticCredentialDetails">PutStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetStaticCredentialDetails">ResetStaticCredentialDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStaticCredentialDetails` <a name="PutStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.putStaticCredentialDetails"></a>

```go
func PutStaticCredentialDetails(value VaultSecretsIntegrationTwilioStaticCredentialDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.putStaticCredentialDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

---

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetStaticCredentialDetails` <a name="ResetStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetStaticCredentialDetails"></a>

```go
func ResetStaticCredentialDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationTwilio resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationtwilio"

vaultsecretsintegrationtwilio.VaultSecretsIntegrationTwilio_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationtwilio"

vaultsecretsintegrationtwilio.VaultSecretsIntegrationTwilio_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationtwilio"

vaultsecretsintegrationtwilio.VaultSecretsIntegrationTwilio_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationtwilio"

vaultsecretsintegrationtwilio.VaultSecretsIntegrationTwilio_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultSecretsIntegrationTwilio resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultSecretsIntegrationTwilio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultSecretsIntegrationTwilio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_twilio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationTwilio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetails">StaticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetailsInput">StaticCredentialDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `StaticCredentialDetails`<sup>Required</sup> <a name="StaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetails"></a>

```go
func StaticCredentialDetails() VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StaticCredentialDetailsInput`<sup>Optional</sup> <a name="StaticCredentialDetailsInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetailsInput"></a>

```go
func StaticCredentialDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationTwilioConfig <a name="VaultSecretsIntegrationTwilioConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationtwilio"

&vaultsecretsintegrationtwilio.VaultSecretsIntegrationTwilioConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Capabilities: *[]*string,
	Name: *string,
	ProjectId: *string,
	StaticCredentialDetails: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.name">Name</a></code> | <code>*string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.staticCredentialDetails">StaticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a></code> | Twilio API key parts used to authenticate against the target Twilio account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.capabilities"></a>

```go
Capabilities *[]*string
```

- *Type:* *[]*string

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_twilio#capabilities VaultSecretsIntegrationTwilio#capabilities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_twilio#name VaultSecretsIntegrationTwilio#name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_twilio#project_id VaultSecretsIntegrationTwilio#project_id}

---

##### `StaticCredentialDetails`<sup>Optional</sup> <a name="StaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.staticCredentialDetails"></a>

```go
StaticCredentialDetails VaultSecretsIntegrationTwilioStaticCredentialDetails
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

Twilio API key parts used to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_twilio#static_credential_details VaultSecretsIntegrationTwilio#static_credential_details}

---

### VaultSecretsIntegrationTwilioStaticCredentialDetails <a name="VaultSecretsIntegrationTwilioStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationtwilio"

&vaultsecretsintegrationtwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails {
	AccountSid: *string,
	ApiKeySecret: *string,
	ApiKeySid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.accountSid">AccountSid</a></code> | <code>*string</code> | Account SID for the target Twilio account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySecret">ApiKeySecret</a></code> | <code>*string</code> | Api key secret used with the api key SID to authenticate against the target Twilio account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySid">ApiKeySid</a></code> | <code>*string</code> | Api key SID to authenticate against the target Twilio account. |

---

##### `AccountSid`<sup>Required</sup> <a name="AccountSid" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.accountSid"></a>

```go
AccountSid *string
```

- *Type:* *string

Account SID for the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_twilio#account_sid VaultSecretsIntegrationTwilio#account_sid}

---

##### `ApiKeySecret`<sup>Required</sup> <a name="ApiKeySecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySecret"></a>

```go
ApiKeySecret *string
```

- *Type:* *string

Api key secret used with the api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_twilio#api_key_secret VaultSecretsIntegrationTwilio#api_key_secret}

---

##### `ApiKeySid`<sup>Required</sup> <a name="ApiKeySid" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySid"></a>

```go
ApiKeySid *string
```

- *Type:* *string

Api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_integration_twilio#api_key_sid VaultSecretsIntegrationTwilio#api_key_sid}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference <a name="VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationtwilio"

vaultsecretsintegrationtwilio.NewVaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSidInput">AccountSidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecretInput">ApiKeySecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySidInput">ApiKeySidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSid">AccountSid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecret">ApiKeySecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySid">ApiKeySid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountSidInput`<sup>Optional</sup> <a name="AccountSidInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSidInput"></a>

```go
func AccountSidInput() *string
```

- *Type:* *string

---

##### `ApiKeySecretInput`<sup>Optional</sup> <a name="ApiKeySecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecretInput"></a>

```go
func ApiKeySecretInput() *string
```

- *Type:* *string

---

##### `ApiKeySidInput`<sup>Optional</sup> <a name="ApiKeySidInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySidInput"></a>

```go
func ApiKeySidInput() *string
```

- *Type:* *string

---

##### `AccountSid`<sup>Required</sup> <a name="AccountSid" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSid"></a>

```go
func AccountSid() *string
```

- *Type:* *string

---

##### `ApiKeySecret`<sup>Required</sup> <a name="ApiKeySecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecret"></a>

```go
func ApiKeySecret() *string
```

- *Type:* *string

---

##### `ApiKeySid`<sup>Required</sup> <a name="ApiKeySid" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySid"></a>

```go
func ApiKeySid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



