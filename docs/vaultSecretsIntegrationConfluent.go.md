# `vaultSecretsIntegrationConfluent` Submodule <a name="`vaultSecretsIntegrationConfluent` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationConfluent <a name="VaultSecretsIntegrationConfluent" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_integration_confluent hcp_vault_secrets_integration_confluent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsintegrationconfluent"

vaultsecretsintegrationconfluent.NewVaultSecretsIntegrationConfluent(scope Construct, id *string, config VaultSecretsIntegrationConfluentConfig) VaultSecretsIntegrationConfluent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig">VaultSecretsIntegrationConfluentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig">VaultSecretsIntegrationConfluentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.putStaticCredentialDetails">PutStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.resetStaticCredentialDetails">ResetStaticCredentialDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStaticCredentialDetails` <a name="PutStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.putStaticCredentialDetails"></a>

```go
func PutStaticCredentialDetails(value VaultSecretsIntegrationConfluentStaticCredentialDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.putStaticCredentialDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails">VaultSecretsIntegrationConfluentStaticCredentialDetails</a>

---

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetStaticCredentialDetails` <a name="ResetStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.resetStaticCredentialDetails"></a>

```go
func ResetStaticCredentialDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationConfluent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsintegrationconfluent"

vaultsecretsintegrationconfluent.VaultSecretsIntegrationConfluent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsintegrationconfluent"

vaultsecretsintegrationconfluent.VaultSecretsIntegrationConfluent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsintegrationconfluent"

vaultsecretsintegrationconfluent.VaultSecretsIntegrationConfluent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsintegrationconfluent"

vaultsecretsintegrationconfluent.VaultSecretsIntegrationConfluent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultSecretsIntegrationConfluent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultSecretsIntegrationConfluent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultSecretsIntegrationConfluent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_integration_confluent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationConfluent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.staticCredentialDetails">StaticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference">VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.staticCredentialDetailsInput">StaticCredentialDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `StaticCredentialDetails`<sup>Required</sup> <a name="StaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.staticCredentialDetails"></a>

```go
func StaticCredentialDetails() VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference">VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StaticCredentialDetailsInput`<sup>Optional</sup> <a name="StaticCredentialDetailsInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.staticCredentialDetailsInput"></a>

```go
func StaticCredentialDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationConfluentConfig <a name="VaultSecretsIntegrationConfluentConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsintegrationconfluent"

&vaultsecretsintegrationconfluent.VaultSecretsIntegrationConfluentConfig {
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
	StaticCredentialDetails: github.com/cdktf/cdktf-provider-hcp-go/hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.name">Name</a></code> | <code>*string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.staticCredentialDetails">StaticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails">VaultSecretsIntegrationConfluentStaticCredentialDetails</a></code> | Confluent API key used to authenticate for cloud apis. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.capabilities"></a>

```go
Capabilities *[]*string
```

- *Type:* *[]*string

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_integration_confluent#capabilities VaultSecretsIntegrationConfluent#capabilities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_integration_confluent#name VaultSecretsIntegrationConfluent#name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_integration_confluent#project_id VaultSecretsIntegrationConfluent#project_id}

---

##### `StaticCredentialDetails`<sup>Optional</sup> <a name="StaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentConfig.property.staticCredentialDetails"></a>

```go
StaticCredentialDetails VaultSecretsIntegrationConfluentStaticCredentialDetails
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails">VaultSecretsIntegrationConfluentStaticCredentialDetails</a>

Confluent API key used to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_integration_confluent#static_credential_details VaultSecretsIntegrationConfluent#static_credential_details}

---

### VaultSecretsIntegrationConfluentStaticCredentialDetails <a name="VaultSecretsIntegrationConfluentStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsintegrationconfluent"

&vaultsecretsintegrationconfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails {
	CloudApiKeyId: *string,
	CloudApiSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails.property.cloudApiKeyId">CloudApiKeyId</a></code> | <code>*string</code> | Public key used alongside the private key to authenticate for cloud apis. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails.property.cloudApiSecret">CloudApiSecret</a></code> | <code>*string</code> | Private key used alongside the public key to authenticate for cloud apis. |

---

##### `CloudApiKeyId`<sup>Required</sup> <a name="CloudApiKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails.property.cloudApiKeyId"></a>

```go
CloudApiKeyId *string
```

- *Type:* *string

Public key used alongside the private key to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_integration_confluent#cloud_api_key_id VaultSecretsIntegrationConfluent#cloud_api_key_id}

---

##### `CloudApiSecret`<sup>Required</sup> <a name="CloudApiSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetails.property.cloudApiSecret"></a>

```go
CloudApiSecret *string
```

- *Type:* *string

Private key used alongside the public key to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_integration_confluent#cloud_api_secret VaultSecretsIntegrationConfluent#cloud_api_secret}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference <a name="VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultsecretsintegrationconfluent"

vaultsecretsintegrationconfluent.NewVaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.cloudApiKeyIdInput">CloudApiKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.cloudApiSecretInput">CloudApiSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.cloudApiKeyId">CloudApiKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.cloudApiSecret">CloudApiSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudApiKeyIdInput`<sup>Optional</sup> <a name="CloudApiKeyIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.cloudApiKeyIdInput"></a>

```go
func CloudApiKeyIdInput() *string
```

- *Type:* *string

---

##### `CloudApiSecretInput`<sup>Optional</sup> <a name="CloudApiSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.cloudApiSecretInput"></a>

```go
func CloudApiSecretInput() *string
```

- *Type:* *string

---

##### `CloudApiKeyId`<sup>Required</sup> <a name="CloudApiKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.cloudApiKeyId"></a>

```go
func CloudApiKeyId() *string
```

- *Type:* *string

---

##### `CloudApiSecret`<sup>Required</sup> <a name="CloudApiSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.cloudApiSecret"></a>

```go
func CloudApiSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationConfluent.VaultSecretsIntegrationConfluentStaticCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



