# `vaultSecretsIntegrationTwilio` Submodule <a name="`vaultSecretsIntegrationTwilio` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationTwilio <a name="VaultSecretsIntegrationTwilio" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_twilio hcp_vault_secrets_integration_twilio}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer"></a>

```typescript
import { vaultSecretsIntegrationTwilio } from '@cdktf/provider-hcp'

new vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio(scope: Construct, id: string, config: VaultSecretsIntegrationTwilioConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig">VaultSecretsIntegrationTwilioConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig">VaultSecretsIntegrationTwilioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.putStaticCredentialDetails">putStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetStaticCredentialDetails">resetStaticCredentialDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStaticCredentialDetails` <a name="putStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.putStaticCredentialDetails"></a>

```typescript
public putStaticCredentialDetails(value: VaultSecretsIntegrationTwilioStaticCredentialDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.putStaticCredentialDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetStaticCredentialDetails` <a name="resetStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.resetStaticCredentialDetails"></a>

```typescript
public resetStaticCredentialDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationTwilio resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isConstruct"></a>

```typescript
import { vaultSecretsIntegrationTwilio } from '@cdktf/provider-hcp'

vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformElement"></a>

```typescript
import { vaultSecretsIntegrationTwilio } from '@cdktf/provider-hcp'

vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformResource"></a>

```typescript
import { vaultSecretsIntegrationTwilio } from '@cdktf/provider-hcp'

vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport"></a>

```typescript
import { vaultSecretsIntegrationTwilio } from '@cdktf/provider-hcp'

vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultSecretsIntegrationTwilio resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecretsIntegrationTwilio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecretsIntegrationTwilio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_twilio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationTwilio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetails">staticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetailsInput">staticCredentialDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `staticCredentialDetails`<sup>Required</sup> <a name="staticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetails"></a>

```typescript
public readonly staticCredentialDetails: VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `staticCredentialDetailsInput`<sup>Optional</sup> <a name="staticCredentialDetailsInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.staticCredentialDetailsInput"></a>

```typescript
public readonly staticCredentialDetailsInput: IResolvable | VaultSecretsIntegrationTwilioStaticCredentialDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilio.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationTwilioConfig <a name="VaultSecretsIntegrationTwilioConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.Initializer"></a>

```typescript
import { vaultSecretsIntegrationTwilio } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationTwilioConfig: vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.capabilities">capabilities</a></code> | <code>string[]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.name">name</a></code> | <code>string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.projectId">projectId</a></code> | <code>string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.staticCredentialDetails">staticCredentialDetails</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a></code> | Twilio API key parts used to authenticate against the target Twilio account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_twilio#capabilities VaultSecretsIntegrationTwilio#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_twilio#name VaultSecretsIntegrationTwilio#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_twilio#project_id VaultSecretsIntegrationTwilio#project_id}

---

##### `staticCredentialDetails`<sup>Optional</sup> <a name="staticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioConfig.property.staticCredentialDetails"></a>

```typescript
public readonly staticCredentialDetails: VaultSecretsIntegrationTwilioStaticCredentialDetails;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

Twilio API key parts used to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_twilio#static_credential_details VaultSecretsIntegrationTwilio#static_credential_details}

---

### VaultSecretsIntegrationTwilioStaticCredentialDetails <a name="VaultSecretsIntegrationTwilioStaticCredentialDetails" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.Initializer"></a>

```typescript
import { vaultSecretsIntegrationTwilio } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationTwilioStaticCredentialDetails: vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.accountSid">accountSid</a></code> | <code>string</code> | Account SID for the target Twilio account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySecret">apiKeySecret</a></code> | <code>string</code> | Api key secret used with the api key SID to authenticate against the target Twilio account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySid">apiKeySid</a></code> | <code>string</code> | Api key SID to authenticate against the target Twilio account. |

---

##### `accountSid`<sup>Required</sup> <a name="accountSid" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.accountSid"></a>

```typescript
public readonly accountSid: string;
```

- *Type:* string

Account SID for the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_twilio#account_sid VaultSecretsIntegrationTwilio#account_sid}

---

##### `apiKeySecret`<sup>Required</sup> <a name="apiKeySecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySecret"></a>

```typescript
public readonly apiKeySecret: string;
```

- *Type:* string

Api key secret used with the api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_twilio#api_key_secret VaultSecretsIntegrationTwilio#api_key_secret}

---

##### `apiKeySid`<sup>Required</sup> <a name="apiKeySid" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails.property.apiKeySid"></a>

```typescript
public readonly apiKeySid: string;
```

- *Type:* string

Api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_twilio#api_key_sid VaultSecretsIntegrationTwilio#api_key_sid}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference <a name="VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegrationTwilio } from '@cdktf/provider-hcp'

new vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSidInput">accountSidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecretInput">apiKeySecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySidInput">apiKeySidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSid">accountSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecret">apiKeySecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySid">apiKeySid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountSidInput`<sup>Optional</sup> <a name="accountSidInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSidInput"></a>

```typescript
public readonly accountSidInput: string;
```

- *Type:* string

---

##### `apiKeySecretInput`<sup>Optional</sup> <a name="apiKeySecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecretInput"></a>

```typescript
public readonly apiKeySecretInput: string;
```

- *Type:* string

---

##### `apiKeySidInput`<sup>Optional</sup> <a name="apiKeySidInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySidInput"></a>

```typescript
public readonly apiKeySidInput: string;
```

- *Type:* string

---

##### `accountSid`<sup>Required</sup> <a name="accountSid" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.accountSid"></a>

```typescript
public readonly accountSid: string;
```

- *Type:* string

---

##### `apiKeySecret`<sup>Required</sup> <a name="apiKeySecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySecret"></a>

```typescript
public readonly apiKeySecret: string;
```

- *Type:* string

---

##### `apiKeySid`<sup>Required</sup> <a name="apiKeySid" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.apiKeySid"></a>

```typescript
public readonly apiKeySid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationTwilioStaticCredentialDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationTwilio.VaultSecretsIntegrationTwilioStaticCredentialDetails">VaultSecretsIntegrationTwilioStaticCredentialDetails</a>

---



