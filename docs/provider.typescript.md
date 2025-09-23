# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-hcp.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HcpProvider <a name="HcpProvider" id="@cdktf/provider-hcp.provider.HcpProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs hcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-hcp'

new provider.HcpProvider(scope: Construct, id: string, config?: HcpProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig">HcpProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.provider.HcpProviderConfig">HcpProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetCredentialFile">resetCredentialFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetGeography">resetGeography</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetSkipStatusCheck">resetSkipStatusCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetWorkloadIdentity">resetWorkloadIdentity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.provider.HcpProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.provider.HcpProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.provider.HcpProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.provider.HcpProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.provider.HcpProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.provider.HcpProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.provider.HcpProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.provider.HcpProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.provider.HcpProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.provider.HcpProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-hcp.provider.HcpProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-hcp.provider.HcpProvider.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-hcp.provider.HcpProvider.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetCredentialFile` <a name="resetCredentialFile" id="@cdktf/provider-hcp.provider.HcpProvider.resetCredentialFile"></a>

```typescript
public resetCredentialFile(): void
```

##### `resetGeography` <a name="resetGeography" id="@cdktf/provider-hcp.provider.HcpProvider.resetGeography"></a>

```typescript
public resetGeography(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.provider.HcpProvider.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetSkipStatusCheck` <a name="resetSkipStatusCheck" id="@cdktf/provider-hcp.provider.HcpProvider.resetSkipStatusCheck"></a>

```typescript
public resetSkipStatusCheck(): void
```

##### `resetWorkloadIdentity` <a name="resetWorkloadIdentity" id="@cdktf/provider-hcp.provider.HcpProvider.resetWorkloadIdentity"></a>

```typescript
public resetWorkloadIdentity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HcpProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.provider.HcpProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-hcp'

provider.HcpProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.provider.HcpProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-hcp'

provider.HcpProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-hcp'

provider.HcpProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-hcp'

provider.HcpProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HcpProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HcpProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HcpProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.provider.HcpProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HcpProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.credentialFileInput">credentialFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.geographyInput">geographyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.skipStatusCheckInput">skipStatusCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.workloadIdentityInput">workloadIdentityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity">HcpProviderWorkloadIdentity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.credentialFile">credentialFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.geography">geography</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.skipStatusCheck">skipStatusCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.workloadIdentity">workloadIdentity</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity">HcpProviderWorkloadIdentity</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.provider.HcpProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.provider.HcpProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.provider.HcpProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.provider.HcpProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-hcp.provider.HcpProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.provider.HcpProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.provider.HcpProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-hcp.provider.HcpProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcp.provider.HcpProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `credentialFileInput`<sup>Optional</sup> <a name="credentialFileInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.credentialFileInput"></a>

```typescript
public readonly credentialFileInput: string;
```

- *Type:* string

---

##### `geographyInput`<sup>Optional</sup> <a name="geographyInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.geographyInput"></a>

```typescript
public readonly geographyInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `skipStatusCheckInput`<sup>Optional</sup> <a name="skipStatusCheckInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.skipStatusCheckInput"></a>

```typescript
public readonly skipStatusCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workloadIdentityInput`<sup>Optional</sup> <a name="workloadIdentityInput" id="@cdktf/provider-hcp.provider.HcpProvider.property.workloadIdentityInput"></a>

```typescript
public readonly workloadIdentityInput: IResolvable | HcpProviderWorkloadIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity">HcpProviderWorkloadIdentity</a>[]

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `credentialFile`<sup>Optional</sup> <a name="credentialFile" id="@cdktf/provider-hcp.provider.HcpProvider.property.credentialFile"></a>

```typescript
public readonly credentialFile: string;
```

- *Type:* string

---

##### `geography`<sup>Optional</sup> <a name="geography" id="@cdktf/provider-hcp.provider.HcpProvider.property.geography"></a>

```typescript
public readonly geography: string;
```

- *Type:* string

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.provider.HcpProvider.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `skipStatusCheck`<sup>Optional</sup> <a name="skipStatusCheck" id="@cdktf/provider-hcp.provider.HcpProvider.property.skipStatusCheck"></a>

```typescript
public readonly skipStatusCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workloadIdentity`<sup>Optional</sup> <a name="workloadIdentity" id="@cdktf/provider-hcp.provider.HcpProvider.property.workloadIdentity"></a>

```typescript
public readonly workloadIdentity: IResolvable | HcpProviderWorkloadIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity">HcpProviderWorkloadIdentity</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.provider.HcpProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HcpProviderConfig <a name="HcpProviderConfig" id="@cdktf/provider-hcp.provider.HcpProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.provider.HcpProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-hcp'

const hcpProviderConfig: provider.HcpProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientId">clientId</a></code> | <code>string</code> | The OAuth2 Client ID for API operations. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The OAuth2 Client Secret for API operations. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.credentialFile">credentialFile</a></code> | <code>string</code> | The path to an HCP credential file to use to authenticate the provider to HCP. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.geography">geography</a></code> | <code>string</code> | The geography in which HCP resources should be created. Default is `us`. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.projectId">projectId</a></code> | <code>string</code> | The default project in which resources should be created. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.skipStatusCheck">skipStatusCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, the provider will skip checking the HCP status page for service outages or returning warnings. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.workloadIdentity">workloadIdentity</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity">HcpProviderWorkloadIdentity</a>[]</code> | workload_identity block. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#alias HcpProvider#alias}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OAuth2 Client ID for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#client_id HcpProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The OAuth2 Client Secret for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#client_secret HcpProvider#client_secret}

---

##### `credentialFile`<sup>Optional</sup> <a name="credentialFile" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.credentialFile"></a>

```typescript
public readonly credentialFile: string;
```

- *Type:* string

The path to an HCP credential file to use to authenticate the provider to HCP.

You can alternatively set the HCP_CRED_FILE environment variable to point at a credential file as well. Using a credential file allows you to authenticate the provider as a service principal via client credentials or dynamically based on Workload Identity Federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#credential_file HcpProvider#credential_file}

---

##### `geography`<sup>Optional</sup> <a name="geography" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.geography"></a>

```typescript
public readonly geography: string;
```

- *Type:* string

The geography in which HCP resources should be created. Default is `us`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#geography HcpProvider#geography}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The default project in which resources should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#project_id HcpProvider#project_id}

---

##### `skipStatusCheck`<sup>Optional</sup> <a name="skipStatusCheck" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.skipStatusCheck"></a>

```typescript
public readonly skipStatusCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, the provider will skip checking the HCP status page for service outages or returning warnings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#skip_status_check HcpProvider#skip_status_check}

---

##### `workloadIdentity`<sup>Optional</sup> <a name="workloadIdentity" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.workloadIdentity"></a>

```typescript
public readonly workloadIdentity: IResolvable | HcpProviderWorkloadIdentity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity">HcpProviderWorkloadIdentity</a>[]

workload_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#workload_identity HcpProvider#workload_identity}

---

### HcpProviderWorkloadIdentity <a name="HcpProviderWorkloadIdentity" id="@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-hcp'

const hcpProviderWorkloadIdentity: provider.HcpProviderWorkloadIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.property.resourceName">resourceName</a></code> | <code>string</code> | The resource_name of the Workload Identity Provider to exchange the token with. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.property.token">token</a></code> | <code>string</code> | The JWT token retrieved from an OpenID Connect (OIDC) or OAuth2 provider. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.property.tokenFile">tokenFile</a></code> | <code>string</code> | The path to a file containing a JWT token retrieved from an OpenID Connect (OIDC) or OAuth2 provider. |

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The resource_name of the Workload Identity Provider to exchange the token with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#resource_name HcpProvider#resource_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The JWT token retrieved from an OpenID Connect (OIDC) or OAuth2 provider.

At least one of `token_file` or `token` must be set, if both are set then `token` takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#token HcpProvider#token}

---

##### `tokenFile`<sup>Optional</sup> <a name="tokenFile" id="@cdktf/provider-hcp.provider.HcpProviderWorkloadIdentity.property.tokenFile"></a>

```typescript
public readonly tokenFile: string;
```

- *Type:* string

The path to a file containing a JWT token retrieved from an OpenID Connect (OIDC) or OAuth2 provider.

At least one of `token_file` or `token` must be set, if both are set then `token` takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs#token_file HcpProvider#token_file}

---



